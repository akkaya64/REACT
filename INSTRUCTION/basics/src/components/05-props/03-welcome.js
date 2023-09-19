import Welcome1 from "./02-welcome"

 
 const Welcome2 = (props) => {
    const {age, authenticated} = props
   return (
     <div>
        <p>I'm {age} years old</p>
        {
            authenticated || <p>You need to login</p>
        }
        <Welcome1 firstName={age} lastName={authenticated} />
     </div>
   )
 }
 
 export default Welcome2