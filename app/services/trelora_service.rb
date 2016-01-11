class TreloraService
  attr_reader :connection
  def initialize
    @connection = Hurley::Client::new('http://api.mytrelora.com/')
  end

  def rating_info
    parse(connection.get("/ratings?api_key=#{ENV['api_key']}"))
  end

  private
  def parse(response)
    JSON.parse(response.body, symbolize_names: true)
  end
end
