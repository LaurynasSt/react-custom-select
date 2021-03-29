import "./index.css";

function Option({onClick, children, value, dataname, className }) {

    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default Option;