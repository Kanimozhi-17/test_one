import styling from '../styles/design.module.css'

function Popup_page(){
    return(
        <div className={styling.popup_pag}> 
           <form>
            <input type='text' placeholder='Enter the Segment Name'></input>
           <select>
           <option value="">Add schema to segment</option>
            <option value="first_name">First Name</option>
            <option value="last_name">Last Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="account_name">Account Name</option>
            <option value="City">City</option>
            <option value="State">State </option>
           </select>
           <a href="">+Add new schema</a>
           </form>
        </div>
    );
}

export default Popup_page