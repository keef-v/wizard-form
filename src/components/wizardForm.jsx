import React, { Component } from "react";
import PropTypes from "prop-types";
import WizardFormFirstPage from "./wizardFormFirstPage"
import WizardFormSecondPage from "./wizardFormSecondPage"
import WizardFormThirdPage from "./wizardFormThirdPage"
import Dropzone  from "react-dropzone";
class WizardForm extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 1,
            progressTracker:1
        };
    } 

    nextPage() {
        
        this.setState({ page: this.state.page + 1 });
    }
    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }

    render() {
        const { onSubmit } = this.props;
        const { page ,progressTracker} = this.state;

        return (
            <div><ProgressTracker currentpage={page}/>

                 
                 
                {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
                {page === 2 && (
                    <WizardFormSecondPage
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 3 && (
                    <WizardFormThirdPage
                        previousPage={this.previousPage}
                        onSubmit={onSubmit}
                    />
                )}
                {/* {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <WizardFormThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )} */}

            </div>
        );
    }
}
class ProgressTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressTracker: 1
        };
    } 
    componentWillReceiveProps(nextProps) {
        if (this.state.progressTracker <  nextProps.currentpage) this.setState({ progressTracker: nextProps.currentpage });
    }
    render() {
        var stepsCompleted=[];
        const { progressTracker } = this.state;
        for (let i = 0; i <progressTracker; i++) stepsCompleted.push(<span>{i+1},</span>);
        
        return <p>Progress: {stepsCompleted} </p>
    }

}

WizardForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};
export default WizardForm;