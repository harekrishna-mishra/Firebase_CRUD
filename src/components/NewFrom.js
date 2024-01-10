import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { DevTool } from "@hookform/devtools";
import { json } from "react-router-dom";

function NewForm() {
  const form = useForm({
    defaultValues: {
      empName: "",
      empEmail: "",
      empPosition: "",
      empSalary: 0,
      empGender: "",
      empSkill: [{ skill: "" }],
      empAddress: "",
    },
  });

  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isValid } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "empSkill",
    control,
  });
  const [empData, setEmpData] = useState([])
  const [empSkillData, setEmpSkillData] = useState([])
  

  const options = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
    { value: "other", label: "Other" },
  ];

  const onSubmit = async (data) => {
    setEmpData(data)
    const empSkillDataConst=data.empSkill
    setEmpSkillData(empSkillDataConst)
   /*  console.log(empSkillData) */
    
    empSkillData.map((e, index)=>{
      console.log(e)
    })
  };
  return (
    <div className="container">
      <div className=" d-flex justify-content-between">
        <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="all_form_data">
            <h1 className="heading">Add Employee</h1>
            <div className="my-2">
              <input
                {...register("empName", {
                  required: {
                    value: true,
                    message: "require to fill",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "name take alphabet only",
                  },
                })}
                type="text"
                className=""
                placeholder="Name"
              ></input>
              {/* dispalying error */}
              <p>{errors.empName?.message}</p>

              <input
                {...register("empEmail", {
                  required: {
                    value: true,
                    message: "require to fill",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "invalid email format",
                  },
                })}
                type="email"
                placeholder="Email"
              ></input>
              {/* dispalying error */}
              <p>{errors.empEmail?.message}</p>

              <input
                {...register("empPosition", {
                  required: {
                    value: true,
                    message: "require to fill",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "position take alphabet only",
                  },
                })}
                type="text"
                placeholder="Position"
              ></input>
              {/* dispalying error */}
              <p>{errors.empPosition?.message}</p>

              <input
                {...register("empSalary", {
                  required: {
                    value: true,
                    message: "require to fill",
                  },
                  pattern: {
                    value: /^[0-9 ]+$/,
                    message: "salary take number only",
                  },
                })}
                type="number"
                placeholder="Salary"
              ></input>
              {/* dispalying error */}
              <p>{errors.empSalary?.message}</p>

              <select
                placeholder="gender"
                {...register("empGender", {
                  required: {
                    value: true,
                    message: "require to select",
                  },
                  /* pattern: {
                  value: /^[a-zA-Z ]+$/,
                  message: "position take alphabet only",
                }, */
                })}
              >
                <option value={""}>gender</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </select>
              {/* dispalying error */}
              <p>{errors.empGender?.message}</p>

              <div className="skill_div">
                {fields.map((field, index, id) => {
                  return (
                    <div key={field.id} className="d-flex">
                      <input className="inputSkill"
                        {...register(`empSkill.${index}.skill`, {
                          required: {
                            value: true,
                            message: "require to fill",
                          },
                        })}
                        type="text"
                        placeholder="Skill"
                      ></input>
                      {/* dispalying error */}
                      {/* {
                        index > 0 && (
                          <p>{errors.empSkill[index].skill?.message}</p> 
                        )
                      } */}
                      {
                        index > 0 && (
                          <button id="btnbtn" onClick={()=>remove(index)}>remove</button>
                        )
                      }
                    </div>
                  );
                })}
                <button className="btnbtn"  onClick={()=>append({skill: ""})}>add skill</button>
              </div>

              <input
                {...register("empAddress", {
                  required: {
                    value: true,
                    message: "require to fill",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9\s,.'-]{3,}$/,
                    message: "please enter valid address",
                  },
                })}
                type="textarea"
                placeholder="Address"
              ></input>
              {/* dispalying error */}
              <p>{errors.empAddress?.message}</p>

              <input
                {...register("empPhone", {
                  required: {
                    value: true,
                    message: "please enter correct phone number",
                  },
                  pattern: {
                    value: /^[0-9 ]+$/,
                    message: "phone no take number only",
                  },
                })}
                type="number"
                placeholder="Phone"
              ></input>
              {/* dispalying error */}
              <p>{errors.empPhone?.message}</p>
            </div>
            <div className="btn_div">
              <button disabled={!formState.isValid} className="btnbtn">Submit</button>
            </div>
          </div>
          <DevTool control={control} />
        </form>
        <div className="form_data my-5">
          <div className="mx-5 my-5">
                <h2>Employee details</h2>
                <div className="data my-3"> <span className="temp">Name:</span>   :{empData.empName}</div>
                <div className="data my-3"><span className="temp">Email: </span>   :{empData.empEmail}</div>
                <div className="data my-3"><span className="temp">Position: </span>{empData.empPosition}</div>
                <div className="data my-3"><span className="temp">Salary:</span>{empData.empSalary}</div>
                <div className="data my-3"><span className="temp">Gender:</span>{empData.empGender}</div>
                <div className=" d-flex data my-3"><span className="temp">Skills:</span>{empSkillData.map((e, index)=>{
                  return(
                    <>
                    <div className="">
                    <span className="temp">-Skill_{index}</span>:-{e.skill}
                    </div>
                    </>
                  )
                })}
                </div>
                <div className="data my-3"><span className="temp">Address:</span>{empData.empAddress}</div>
                <div className="data my-3"><span className="temp">Phone:</span>{empData.empPhone}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewForm;
