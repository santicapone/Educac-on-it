export default function Title({ title, subtitle }) {
  return (
    <div className="title-component text-center">
      <h1 className="fw-bold mb-1">{title}</h1>

      <p className="fs-5 mb-0">{subtitle}</p>
    </div>
  );
}
