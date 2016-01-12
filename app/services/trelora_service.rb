class TreloraService
  attr_reader :connection
  def initialize
    @connection = Hurley::Client::new('http://api.mytrelora.com')
  end

  def ratings
    parse(connection.get("/ratings?api_key=#{ENV['api_key']}"))
  end

  def rating_details(id)
    parse(connection.get("/transacts/#{id}/ratings?api_key=#{ENV['api_key']}"))
  end

  def transaction(id)
    parse(connection.get("/transacts/#{id}?api_key=#{ENV['api_key']}"))
  end

  def member(id)
    parse(connection.get("/members/#{id}?api_key=#{ENV['api_key']}"))
  end

  def person(id)
    parse(connection.get("/people/#{id}?api_key=#{ENV['api_key']}"))
  end

  def leaderboard
    parse(connection.get("/ratings/leaderboard?api_key=#{ENV['api_key']}"))
  end

  private
  def parse(response)
    JSON.parse(response.body, symbolize_names: true)
  end
end
