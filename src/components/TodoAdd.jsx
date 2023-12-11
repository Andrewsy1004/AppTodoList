import { useForm } from '../hooks/UseForm.js';

export const TodoAdd = ({ onNewTodo }) => {
  const { formState, onNameChange, onReset } = useForm({
    description: ''
  });

  const { description } = formState;

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    };

    onNewTodo(newTodo);
    onReset();
  };

  return (
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-center">Add Todo</h4>
          <form onSubmit={onFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="What needs to be done?"
                name="description"
                value={description}
                onChange={onNameChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block w-100 mt-3">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
