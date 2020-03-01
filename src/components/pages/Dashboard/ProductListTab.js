import React, { Component } from "react";
import { AuthContext } from "../../config/Auth";
import Firebase from "../../config/Firebase";
import Alert from "react-bootstrap/Alert";

export class ProductListTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    let productListRows = [];
    const { uid } = this.context.currentUser;
    Firebase.firestore()
      .collection("users")
      .doc(uid)
      .onSnapshot(doc => {
        const { products } = doc.data();
        this.setState({ products });
        if (products) {
          for (let i = 0; i < products.length; i++) {
            productListRows.push(
              <tr>
                <td>{products[i].url}</td>
              </tr>
            );
          }
        }
      });
  }

  render() {
    return (
      <div className="tab-container">
        {this.props.showAlert ? <Alert variant="success">Product added!</Alert> : null}
        {!this.state.products ? (
          <span>You have no products yet..</span>
        ) : (
          <table>
            <tbody>
              <tr>
                <td>URL</td>
              </tr>
              {this.state.products.map((product, index) => (
                <tr key={index}>
                  <td>
                    <a href={product.url}>Product link {index + 1}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

ProductListTab.contextType = AuthContext;

export default ProductListTab;
