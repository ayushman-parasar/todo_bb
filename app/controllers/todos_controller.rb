class TodosController < ApplicationController

  def index
    @todos = Todo.all
  end

  def new
    @todo = Todo.new
  end

  def create
    puts "inside create action", params
    @todo = Todo.new(todo_params)
    if @todo.save
      render status: :ok, json: {notice: "Todo has been created successfully"}
    else
      error_message = @todo.errors.full_messages
      render status: :unprocessable_entity, json:{errors: error_message}
    end
  end

  def destroy
  end

  private
    def todo_params
      params.require(:todo).permit(:title, :description)
    end

end
