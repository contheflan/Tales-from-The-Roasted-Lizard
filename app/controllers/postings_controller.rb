class PostingsController < ApplicationController
  before_action :set_posting, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user_posting, only: [:update, :destory]
  
  # GET /postings
  def index
    @postings = Posting.all

    render json: @postings
  end

  # GET /postings/1
  def show
    render json: @posting
  end

  # POST /postings
  def create
    @posting = Posting.new(posting_params)
    @posting.user = @current_user
    if @posting.save
      render json: @posting, status: :created
    else
      render json: @posting.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /postings/1
  def update
    if @posting.update(posting_params)
      render json: @posting
    else
      render json: @posting.errors, status: :unprocessable_entity
    end
  end

  # DELETE /postings/1
  def destroy
    @posting.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_posting
      @posting = Posting.find(params[:id])
    end

    def set_user_posting
      @posting = @current_user.postings.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def posting_params
      params.require(:posting).permit(:user_id, :title, :content, :img_url)
    end
end
