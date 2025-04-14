import React from "react";
function Expense(){
    return(
        <div class = "formContainer">
            <h2>Add Expense</h2>
            <form >
                <input placeholder="Expense Name"/>
                <input placeholder="Expense Description"/>
                <input placeholder="Expense Category"/>
                <input placeholder="Amount"/>
                 <input placeholder="Day" type = "date"/>
                 <button>Submit</button>

            </form>
            
        </div>
    )

}
export default Expense;