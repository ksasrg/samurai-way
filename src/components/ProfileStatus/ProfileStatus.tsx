import React, { ChangeEvent, ChangeEventHandler } from "react"


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType>  {

    state = {
        editMode: false,
        status: this.props.status
    } 

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any): void {
       if (prevProps.status !== this.props.status) {
        this.setState({          
            status: this.props.status
        })
       }
    }
    
    activateEditMode = () => {
        this.setState({
            editMode: true,
            // status: this.props.status
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState({status: event.currentTarget.value})        
    }

    render() {
        return <>
            {
                !this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'no status'}</span>
                </div>
            }

            {
                this.state.editMode && <div>
                    <input
                        onBlur={this.deactivateEditMode.bind(this)}
                        onChange={this.onChangeHandler.bind(this)}
                        autoFocus={true}
                        type="text" value={this.state.status} />
                </div>
            }

        </>
    }
}