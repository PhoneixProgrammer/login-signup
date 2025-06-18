import {useState} from 'react';

function LoginForm(){ 
    const [ error,setError]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        setError('Invalid username or password')
    }
    return(
        <form onSubmit={handleSubmit}>
            <div style ={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" name="username"/>

            <label htmlFor ="password">Password</label>
            <input id="password" type="password" name="password"/>
            
            <button type="submit" style ={{
            backgroundColor:'#111112',
            color:'#FFFFFF',
            padding: ' 10px 20px',
            border:'none',
            borderRadius:'10px',
            fontWeight:'bold',
            cursor:'pointer'
            }}
                onFocus={()=>console.log('focused')}
                onMouseOver={()=>console.log('hovered')}
                >Login</button>
            {error && (
            <div 
                role="alert"
                style={{color:'red',marginTop:'10px'}}
                >{error}</div>
            )}
            <button aria-label="Forgot Password">
            Forgot Password
            </button>
            
            <a href="https://react.dev/blog/2023/03/16/introducing-react-dev">React docs</a>
                </div>
        </form>
    )
}
export default LoginForm;