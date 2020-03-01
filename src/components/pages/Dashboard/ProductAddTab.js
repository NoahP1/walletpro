import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../config/Auth";
import Firebase from "../../config/Firebase";

export class AddProductTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amazonUrl: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { uid } = this.context.currentUser;
    const data = {
      createdAt: new Date(),
      url: this.state.amazonUrl
    };
    const arrayUnion = Firebase.firestore.FieldValue.arrayUnion;

    Firebase.firestore()
      .collection("users")
      .doc(uid)
      .update({ products: arrayUnion(data) })
      .then(() => {
        this.props.data({ activeTab: "products", showAlert: true });
        document.querySelector(".add-amazon-url").value = "";
      })
      .catch(error => {
        console.log(error);
      });
  };
  handleChange = e => {
    this.setState({
      amazonUrl: e.target.value
    });
  };
  render() {
    return (
      <div className="tab-container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group md="4" controlId="validationFormikUsername">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">
                  <i className="fa fa-amazon"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Enter a product URL.."
                aria-describedby="inputGroupPrepend"
                name="amazon-url"
                onChange={this.handleChange}
                pattern="https?:\/\/(?=(?:....)?amazon|smile)(www|smile)\S+com(((?:\/(?:dp|gp)\/([A-Z0-9]+))?\S*[?&]?(?:tag=))?\S*?)(?:#)?(\w*?-\w{2})?(\S*)(#?\S*)+"
                required
                className="add-amazon-url"
              />
              <Form.Control.Feedback type="invalid">test</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Product
          </Button>
        </Form>
      </div>
    );
  }
}

AddProductTab.contextType = AuthContext;

export default AddProductTab;
