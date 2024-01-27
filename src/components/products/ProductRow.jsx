/* eslint-disable react/prop-types */

const style = product.stocked ? undefined: {color: 'red'}

export function ProductRow({product}) {
  return (
    <tr>
      <td style={style}> {product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
