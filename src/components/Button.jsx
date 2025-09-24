"use client"


const Button = () => {

  return (
    <button onClick={()=>('Here we go!')}
              className="btn btn-ghost"
        >
        Click me (click event)
      </button>
  );
};

export default Button;