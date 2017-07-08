class TimeController < ApplicationController
  def index
  end

  def current

    # ajax(json)リクエストだけに対応する
    respond_to do |format|
      format.json {

        # render json: {ハッシュ} という形式でjson形式でデータを送信する
        # 一応､｢通信成功｣という意味でstatus: 200も返しておく
        render json: {time: Time.now.to_s}, status: 200
      }
    end
  end
end
