class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  before_action :authenticate_user



  private

  def current_user
    @current_user ||= User.find(session[:user_id])
  end

  def authenticate_user
    render json: { error: "You must be logged in to do that" }, status: :unauthorized unless current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found(e)
    render json: { error: e.message }, status: :not_found
  end
end
