export default function PostRide(){

    const han = (e:any) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        console.log(formData)
        console.log(form)
    }

    return(
        <>
         <form onSubmit={han}>
            <label>Name: <input type="text" name="name" required/></label>
            <label>Contact: <input type="tel" name="contact" required/></label>
            <label>Origin: <input type="text" name="origin" required/></label>
            <label>Destination: <input type="text" name="destination" required/></label>
            <label>Time: <input type="datetime-local" name="time" required/></label>
            <label>Seats: <input type="number" name="seat" required/></label>
            <button type="submit">Join</button>
         </form>
        </>
    )
} 