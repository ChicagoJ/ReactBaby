import React from 'react'
import { Input, Button, List } from 'antd'
const TodoUI = props => {
  return (
    <div>
      <Input
        value={props.inputValue}
        onChange={props.handleChange}
        placeholder="Todo List"
        style={{ width: '300px', marginRight: '10px', marginTop: '10px' }}
      />
      <Button type="primary" onClick={props.handleClick}>
        Submit
      </Button>

      <List
        style={{ width: '300px', marginTop: '10px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={index => {
              props.handleDelete(index)
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

// class TodoUI extends React.Component {
//   render() {
//     return (
//       <div>
//         <Input
//           value={this.props.inputValue}
//           onChange={this.props.handleChange}
//           placeholder="Todo List"
//           style={{ width: '300px', marginRight: '10px', marginTop: '10px' }}
//         />
//         <Button type="primary" onClick={this.props.handleClick}>
//           Submit
//         </Button>

//         <List
//           style={{ width: '300px', marginTop: '10px' }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item
//               onClick={index => {
//                 this.props.handleDelete(index)
//               }}
//             >
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }

export default TodoUI
