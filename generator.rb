#! /usr/bin/ruby

output = File.open('assets/frames.css', 'w')

frames = 24
angleStep = 360 / frames

(0...frames).each do |i|
	output.puts <<-css
.frames > div:nth-child(#{ i + 1 }) {
	-webkit-transform: rotateY(#{ angleStep * i }deg) translateZ(380px);
}
	css
end
