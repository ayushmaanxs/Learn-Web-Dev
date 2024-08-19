import "./Item.css";
function Item(props) {
  const itemName = props.name;
  return <div>
    <p className="nirma-wala-class">{itemName}</p>
    {props.children} 
    {/* components ke andar ke content ko visible krane ke liye props.children  krna pdta hai */}
  </div>
}

export default Item;
