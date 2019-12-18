import React, {Component} from 'react';

export default class NotesStatusFilter extends Component {
    buttons = [
        {name: 'Все', label: 'Все'},
        {name: 'Посмотреть позже', label: 'Посмотреть позже'},
        {name: 'Изучаю', label: 'Изучаю'},
        {name: 'Завершённые', label: 'Завершённые'}
    ];

    render() {
        const {filter, onFilterChange} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type="button" className={`btn ${clazz}`}
                        key={name} onClick={() => onFilterChange(name)}>
                    {label}
                </button>
            )
        });
        return (
            <div className="btn-group-vertical btn-group-sm my-2" role="group">
                {buttons}
            </div>
        )
    }

}