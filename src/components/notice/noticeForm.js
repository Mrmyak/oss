import './style.css'
export const Form=({onsubmit})=>{

    return(
        <form onsubmit={onsubmit}>
            

            <div className='form-group'>
                <label htmlFor='title'>Title</label>
                <input className='form-control' id='title' placeholder='' required />
            </div>
            <div className='form-group'>
                <label htmlFor='content'>Content</label>
                <input className='form-control' id='content' placeholder='' required />
            </div>


                <div className='form-group inline'>
                <button className='form-control btn btn-primary' type='submit' id='submit'>
                    Submit
                </button>
            </div>
                

           
        </form>
    )


}
export default Form;
