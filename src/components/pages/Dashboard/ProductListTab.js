import React, { Component } from "react";
import { AuthContext } from "../../config/Auth";
import Firebase from "../../config/Firebase";

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
      .get()
      .then(doc => {
        const { products } = doc.data();
        this.setState({ products });
        for (let i = 0; i < products.length; i++) {
          productListRows.push(
            <tr>
              <td>{products[i].url}</td>
            </tr>
          );
        }
        console.log(productListRows);
      });
  }
  render() {
    return (
      <div className="tab-container">
        <table>
          <tbody>
            <tr>
              <th>URL</th>
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
      </div>
    );
  }
}

ProductListTab.contextType = AuthContext;

export default ProductListTab;

// export class ProductListTab extends Component {
//   const { currentUser } = useContext(AuthContext);
// Firebase.firestore()
//   .collection("users")
//   .doc(currentUser.uid)
//   .get()
//   .then(doc => {
//     const { products } = doc.data();
//     let productListRows = [];
//     for (let i = 0; i < products.length; i++) {
//       productListRows.push(
//         <tr>
//           <td>{products[i].createdAt}</td>
//           <td>{products[i].url}</td>
//         </tr>
//       );
//       console.log(products[i].url);
//     }
//     console.log(products);
//   });

//   return (
//     <div className="tab-container">
//       <h1>List products</h1>
//       <table>
//         <tbody>
//           <tr>
//             <td>Date</td>
//             <td>URL</td>
//           </tr>
//           {productListRows}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ProductListTab;
