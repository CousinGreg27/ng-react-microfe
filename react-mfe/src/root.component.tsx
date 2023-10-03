export default function Root(props) {
  return (
    <section>{props.name} is mounted! This page is using React
      <br />
      <a href="/angular">Go to Angular page</a>
    </section>
  );
}
