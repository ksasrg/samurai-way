import React from "react"


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType>  {
    statusInputRef = React.createRef<HTMLInputElement>()

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        // this.props.updateStatus()
        this.statusInputRef.current?.value
    }



    render() {
        return <>
            {/* <span onDoubleClick={this.activateEditMode}>{this.props.status}</span> */}
            {
                !this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
            }

            {
                this.state.editMode && <div>
                    <input
                        ref={this.statusInputRef}
                        onBlur={this.deactivateEditMode}
                        autoFocus={true}
                        type="text" value={this.props.status} />
                </div>
            }

        </>
    }
}