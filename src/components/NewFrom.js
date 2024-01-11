import React, { useState } from "react";
import { useForm, useFieldArray, useFormState } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { DevTool } from "@hookform/devtools";
import { json } from "react-router-dom";

function NewForm() {
  const form = useForm({ mode:"onChange",
    defaultValues: {
      empName: "",
      empEmail: "",
      empPosition: "",
      empSalary: "",
      empGender: "",
      empSkill: [{ skill: "" }],
      empAddress: "",
    },
  });
  
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isValid, isDirty, dirtyFields } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "empSkill",
    control,
  });
  const [empData, setEmpData] = useState([]);
  const [empSkillData, setEmpSkillData] = useState([]);

  const options = [
    { value: "", label: "Gender" },
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
  ];

  const onSubmit = async (data) => {
    setEmpData(data);
    const empSkillDataConst = data.empSkill;
    setEmpSkillData(empSkillDataConst);
    console.log("all data = ",empData)
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        <form
          className=" my-3 p-2 form_data col-lg-6 col-md-6 col-sm-12 mx-3 form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="all_form_data">
            <h1 className="heading">Add Employee</h1>
            <div className="container my-2">
              <input
                {...register("empName", {
                  required: {
                    value: true,
                    message: "require to fill",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]{4,20}$/,
                    message:
                      "name take alphabet only with min max length (4-20)",
                  },
                })}
                type="text"
                className=""
                placeholder="Name"
              ></input>
              <p>{errors.empName?.message}</p>

              <input
                {...register("empEmail", {
                  required: {
                    value: true,
                    message: "require to fill",
                  },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "invalid email format or min max length (7-22)",
                  },
                })}
                type="email"
                placeholder="Email"
              ></input>
              {/* dispalying error */}
              <p>{errors.empEmail?.message}</p>

              <input
                {...register("empPosition",{
                  required: {
                    value: true,
                    message: "require to fill",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]{4,22}$/,
                    message:
                      "position take alphabet only with min max length (4-22)",
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
                select Gender
                {
                  options.map((option)=>(
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))
                }
                {/* <option value={""}>gender</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option> */}
              </select>
              {/* dispalying error */}
              <p>{errors.empGender?.message}</p>

              <div className="skill_div">
                {fields.map((field, index, id) => {
                  return (
                    <div key={field.id} className="d-flex">
                      <input
                        className="inputSkill"
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
                      {index > 0 && (
                        <button
                          id="btnbtn"
                          type="button"
                          onClick={() => remove(index)}
                        >
                          remove
                        </button>
                      )}
                    </div>
                  );
                })}
                <button
                  className="btnbtn"
                  type="button"
                  onClick={() => append({ skill: "" })}
                >
                  add skill
                </button>
              </div>

              <input
                {...register("empAddress", {
                  required: {
                    value: true,
                    message: "require to fill",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9\s,.'-]{3,40}$/,
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
                    message: "please enter phone number",
                  },
                  pattern: {
                    value: /^[0-9 ]{4,20}$/,
                    message:
                      "please enter correct phone number with min max length (4-20)",
                  },
                })}
                type="number"
                placeholder="Phone"
              ></input>
              
              <p>{errors.empPhone?.message}</p>
            </div>
            <div className="btn_div">
              <button disabled={!isDirty || !isValid} className="btnbtn">
                Submit
              </button>
            </div>
          </div>
          <DevTool control={control} />
        </form>
        <div className="col-lg-6 col-md-6 col-sm-12 form_data my-3 mx-3">
          <div className="mx-5 my-5">
            <h2>Employee details</h2>
            <div className="data my-3">
              {" "}
              <span className="temp">Name:</span> :{empData.empName}
            </div>
            <div className="data my-3">
              <span className="temp">Email: </span> :{empData.empEmail}
            </div>
            <div className="data my-3">
              <span className="temp">Position: </span>
              {empData.empPosition}
            </div>
            <div className="data my-3">
              <span className="temp">Salary:</span>
              {empData.empSalary}
            </div>
            <div className="data my-3">
              <span className="temp">Gender:</span>
              {empData.empGender}
            </div>
            <div className=" d-flex data my-3">
              <span className="temp">Skills:</span>
              {
              empSkillData.map((e, index, id) => {
                return (
                  <>
                    <div key={id} className="">
                      <span className="temp">-Skill_{index}</span>:-{e.skill}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="data my-3">
              <span className="temp">Address:</span>
              {empData.empAddress}
            </div>
            <div className="data my-3">
              <span className="temp">Phone:</span>
              {empData.empPhone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewForm;
