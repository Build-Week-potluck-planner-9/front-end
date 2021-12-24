import axios from 'axios'
import React, { useEffect } from 'react'

const EditEvent = (props) => {

    // useEffect(()=>{
    //     axios.get(`http://localhost:9000/api/movies/${id}`)
    //         .then(res=>{
	// 			setMovie(res.data)
    //         })
	// }, []);

    // const handleChange = (e) => {
    //     setMovie({
    //         ...movie,
    //         [e.target.name]: e.target.value
    //     });
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.put()
    //         .then(res=> console.log(res))
	// 		.catch(err=>{
	// 			console.log(err);
	// 		})
	// }

    return (
        <div className='editEvent'>
            <form>
                <label>
                    <input 
                        type='text'
                        name='eventName'
                    />
                </label>
                <label>
                    <input 
                        type='text'
                        name='eventTime'
                    />
                </label>
                <label>
                    <input 
                        type='text'
                        name='eventDate'
                    />
                </label>
            </form>
        </div>
    )
}

export default EditEvent;