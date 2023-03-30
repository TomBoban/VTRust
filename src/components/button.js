import React from 'react';

export default function Button({ children, loading = false, style = {}, ...props }){
    return(
        <button
          style={{ background: "#FBB03B", width: "36%", ...style }}
          className="btn sbmt_btn"
          disabled={loading}
          {...props}
        >
          {loading ? "Loading..." : children}
        </button>
    )
}