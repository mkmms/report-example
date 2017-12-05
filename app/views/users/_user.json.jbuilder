json.extract! user, :id, :email, :password, :first_name, :last_name, :gender, :phone, :address_line1, :address_line2, :state, :city, :country, :status, :marital_status, :created_at, :updated_at
json.url user_url(user, format: :json)
