import './Header.css';

const Header = (props) => {

    return (
        <div className={`header ${props.topLine && "topLine"} ${props.bottomLine && "bottomLine"}`}>
            <h4>{props.title}</h4>
            {props.children}
        </div>
    );
};

export default Header;