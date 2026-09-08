type ProductCardProps = {
  title: string;
  price: number;
};

function ProductCard({ title, price }: ProductCardProps) {
  return <h2>{title}</h2>;
}

export default ProductCard