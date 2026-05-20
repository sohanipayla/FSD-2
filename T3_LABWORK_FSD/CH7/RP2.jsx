function RP2(props) {
    return (
        <div>
            <ul>
                <li><strong>Name:</strong> {props.name}</li>
                <li><strong>Roll No:</strong> {props.roll}</li>
                <li><strong>Updated Marks:</strong> {props.marks + 1}</li>
            </ul>
        </div>
    )
}

export default RP2;
