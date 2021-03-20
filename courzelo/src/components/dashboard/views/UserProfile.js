import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {isLength, isMatch} from '../../util/validation/Validation'
import {showSuccessMsg, showErrMsg} from '../../util/notification/Notification'
import {fetchAllUsers, dispatchGetAllUsers} from '../../../redux/actions/usersAction'

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const initialState = {
  name: '',
  password: '',
  cf_password: '',
  err: '',
  success: ''
}

function User() {


    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)

    const {user, isAdmin} = auth
    const [data, setData] = useState(initialState)
    const {name, password, cf_password, err, success} = data

    const [avatar, setAvatar] = useState(false)
    const [loading, setLoading] = useState(false)
    const [callback] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if(isAdmin){
            fetchAllUsers(token).then(res =>{
                dispatch(dispatchGetAllUsers(res))
            })
        }
    },[token, isAdmin, dispatch, callback])

    const handleChange = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err:'', success: ''})
    }

  const changeAvatar = async(e) => {
    e.preventDefault()
    try {
        const file = e.target.files[0]

        if(!file) return setData({...data, err: "No files were uploaded." , success: ''})

        if(file.size > 1024 * 1024)
            return setData({...data, err: "Size too large." , success: ''})

        if(file.type !== 'image/jpeg' && file.type !== 'image/png')
            return setData({...data, err: "File format is incorrect." , success: ''})

        let formData =  new FormData()
        formData.append('file', file)

        setLoading(true)
        const res = await axios.post('/api/upload_avatar', formData, {
            headers: {'content-type': 'multipart/form-data', Authorization: token}
        })

        setLoading(false)
        setAvatar(res.data.url)
        
    } catch (err) {
        setData({...data, err: err.response.data.msg , success: ''})
    }
}

const updateInfor = () => {
  try {
      axios.patch('/user/update', {
          name: name ? name : user.name,
          avatar: avatar ? avatar : user.avatar
      },{
          headers: {Authorization: token}
      })

      setData({...data, err: '' , success: "Updated Success!"})
  } catch (err) {
      setData({...data, err: err.response.data.msg , success: ''})
  }
}

const updatePassword = () => {
  if(isLength(password))
      return setData({...data, err: "Password must be at least 6 characters.", success: ''})

  if(!isMatch(password, cf_password))
      return setData({...data, err: "Password did not match.", success: ''})

  try {
      axios.post('/user/reset', {password},{
          headers: {Authorization: token}
      })

      setData({...data, err: '' , success: "Updated Success!"})
  } catch (err) {
      setData({...data, err: err.response.data.msg , success: ''})
  }
}

const handleUpdate = () => {
  if(name || avatar) updateInfor()
  if(password) updatePassword()
}

  return (
    <>
     <div>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            {loading && <h3>Loading.....</h3>}
        </div>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Company (disabled)</label>
                        <Form.Control
                          defaultValue="Creative Code Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        
                        <label>Username</label>
                        <input
                          defaultValue={user.name}
                          onChange={handleChange}
                          placeholder="Username"
                          type="text"
                        ></input>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          defaultValue={user.email}
                          placeholder="Email"
                          type="email"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue={user.name}
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue={user.name}
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                   
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    
                    <Col className="pr-1" md="4">
                      <Form.Group>
                    <label htmlFor="password">New Password</label>
                    <input type="password" name="password" id="password"
                    placeholder="Your password" value={password} onChange={handleChange} />
                    </Form.Group>
                    </Col>

                    <Col className="pl-1" md="4">

                    <Form.Group>

                    <label htmlFor="cf_password">Confirm New Password</label>
                    <input type="password" name="cf_password" id="cf_password"
                    placeholder="Confirm password" value={cf_password} onChange={handleChange} />
                </Form.Group>
                </Col>
                </Row>

                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About Me</label>
                        <Form.Control
                          cols="80"
                          defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                          that two seat Lambo."
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    disabled={loading} onClick={handleUpdate}
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require("../assets/img/photo-1431578500526-4d9613015464.jpeg")
                      .default
                  }
                ></img>
              </div>
              <Card.Body>
                <div className="author">
      
                    <img
                       alt="..."
                      className="avatar border-gray"
                      src={avatar ? avatar : user.avatar}
                    ></img>
                    <span>
                        <i className="fas fa-camera"></i>
                        <p>Change</p>
                        <input type="file" name="file" id="file_up" onChange={changeAvatar} />
                    </span>
                 
                  <h2 className="description" >  {user.name} </h2>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
