Types::UserType = GraphQL::ObjectType.define do
  name "User"
  field :id, !types.ID
  field :email, !types.String
	field :password, !types.String
	field :first_name, !types.String
	field :last_name, !types.String
	field :gender, !types.String
	field :phone, !types.String
	field :address_line1, !types.String
	field :address_line2, !types.String
	field :state, !types.String
	field :city, !types.String
	field :country, !types.String
	field :status, !types.String
	field :marital_status, !types.String
end