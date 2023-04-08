import React, { useState } from 'react';
import CrudServices from '../../Services/CrudServices'
const service = new CrudServices()


const UploadExcel = () => {
    const [excelFile,setSelectedFile] = useState()
    function handleChange(e) {
        setSelectedFile(e.target.files[0])
        console.log(e.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (excelFile !== null) {
            console.log(excelFile.name);
            var extenstion = excelFile.name.split('.').pop();
            console.log(extenstion)
        

            if (extenstion.toLowerCase() === 'xlsx') {
                const formData = new FormData();
                formData.append('excelFile',excelFile);
                formData.append('fileName', excelFile.name);
                formData.append('fileExtension',extenstion )
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                };
                service.InsertExcelRecord(formData, config)
                    .then((formData) => {
                        console.log(formData)
                        console.log(config)
                    })
                alert("your file uploaded");
            }
            else {
                alert('Excel only')
            }
        }
        else {
            alert('you need to upload your file')
        }

    }

    return (
        <div className='mt-5'>

            <h1>Upload your Excel file</h1>
            <div className='d-flex mt-3'>
                <input onChange={handleChange} className="d-inline-block form-control form-control-lg" id="formFileLg" type="file" />
                <button type="button" className="d-inline-block btn btn-danger btn-lg" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default UploadExcel; 
