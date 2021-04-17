json.posts do
  json.array! @posts do |post|
    json.extract! post, :id, :title, :body, :created_at, :updated_at
  end
end
