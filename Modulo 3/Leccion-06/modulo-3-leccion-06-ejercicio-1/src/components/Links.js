const Menu = (props) => {
  return (
    <li>
      <a
        title={props.title}
        className={props.class}
        href={props.href}
        target={props.openInNewTab === true ? '_blank' : ''}
        rel='noreferrer'
      >
        Blog
      </a>
    </li>
  );
};

Menu.defaultProps = {
  openInNewTab: "false",
};

export default Menu;
