import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon />
            <h2 id="h2">{text}</h2>
        </div>
    )
}


export default SidebarOption;