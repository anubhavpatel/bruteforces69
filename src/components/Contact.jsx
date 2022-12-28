import React from 'react'
import "../styles/Contact.css"
const Contact = () => {
  return (
    
      <div class="container">
        <div className='fo'>
  <form>

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

    <input className='submit' type="submit" value="Submit"/>

  </form>
  </div>
</div>

   
  );
}

export default Contact