import React ,{Component} from 'react'
import { Form,Field, reduxForm } from 'redux-form'
import  Dropzone from 'react-dropzone'
import DropZoneField from "../components/dropzoneField"

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.sex) {
        errors.sex = 'Required'
    }
    if (!values.favoriteColor) {
        errors.favoriteColor = 'Required'
    }
    return errors
}
// class DocUpload extends Component {
//     render() {
//         const { input, dataAllowedFileExtensions } = this.props
//         const onInputChange = (e) => {
//             e.preventDefault();
//             const files = [...e.target.files];
//             input.onChange(files);

//         };
//         return (
            
//                 <Dropfile onDrop={() => console.log('test')}>

//                     {<div>
//                         test
//                             </div>}

//                 </Dropfile>
//         )
//     }
// }

const renderError = ({ meta: { touched, error } }) => touched && error ?
    <span className='error'>{error}</span> : false

const imageIsRequired = value => (!value ? "Required" : undefined);

class WizardFormThirdPage extends Component {
   
constructor(props) {
    super(props);
    this.state = {
        progressTracker: 1,
        state : { imageFile: [] }
    };
    const { handleSubmit, previousPage } = props
    this.handleSubmit=handleSubmit;
    this.previousPage=previousPage;
} 
    handleFormSubmit = formProps => {
        const fd = new FormData();
        fd.append("imageFile", formProps.imageToUpload[0]);
        alert(JSON.stringify(formProps, null, 4));
        // append any additional Redux form fields
        // create an AJAX request here with the created formData
    };

    handleOnDrop = newImageFile =>  {// console.log(newImageFile);  
       let  reader = new FileReader();
        console.log(newImageFile);
        // reader.onloadend = function (event) {
        //     console.log(newImageFile);
        //     // filename is in file.name
        //     // ... do something here
        // }
        
        // reader.readAsArrayBuffer  (newImageFile);
        return this.setState({ imageFile: newImageFile });}

    //  handleOnDrop = newImageFile => console.log('test');

    resetForm = () => this.setState({ imageFile: [] }, () => this.props.reset());
render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <p className='section'>Section 3</p>

            <div>
                <label>Upload your documents here</label>
                <div>
      
                    
                    <Field
                        name="imageToUpload"
                        component={DropZoneField}
                        type="file"
                        imagefile={this.state.imageFile}
                        handleOnDrop={this.handleOnDrop}
                        validate={[imageIsRequired]}

                    />
                    <div className='form-buttons'>
                        <button type="button" className="previous a-btn" onClick={this.previousPage}>Previous</button>
                        <button type="submit" className='a-btn--filled'>Ready to submit</button>
                    </div>
                </div>
            </div>

        </form>
    )
  }
}
export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(WizardFormThirdPage)