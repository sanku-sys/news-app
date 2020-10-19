import React, { useState, useEffect } from "react";

export let enhancer =
  (UserComponent) => ({ history, ...props }) => {
    let currentDate = new Date().toISOString().slice(0, 10).split('-');
    let formattedDate = `${currentDate[1]}/${currentDate[2]}/${currentDate[0]}`
    let initialValues = {
      name: '',
      email: '',
      exitTime: '',
      entryTime: '',
      personName: '',
      visitType: ''
    }
    let [formData, setFormData] = useState(initialValues);
    let [userList, setUserList] = useState(JSON.parse(localStorage.getItem("users")) || [])

    useEffect(() => {
      setUserList(userList)
    }, [userList])

    const handleInputChange = e => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
      if (Object.values(formData).every(d => d !== "")) {
        let allUsers = JSON.parse(localStorage.getItem("users")) || [];
        allUsers.push(formData);
        allUsers && allUsers.forEach(user => user.entryDate = formattedDate)
        setUserList(allUsers)
        localStorage.setItem("users", JSON.stringify(allUsers));
        setFormData(initialValues)
      }
    }

    return (
      <UserComponent
        {...props}
        {...{
          formData,
          userList,
          handleSubmit,
          formattedDate,
          handleInputChange
        }}
      />
    );
  }


export default enhancer;

