export default function Footer({ email }) {
  return (
    <footer className="footer">
      Minneapolis · Remote · <a href={`mailto:${email}`}>{email}</a>
    </footer>
  )
}
