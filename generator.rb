#! /usr/bin/ruby

output = File.open('assets/css/frames.css', 'w')

frames = 24
angleStep = 360 / frames

(0...frames).each do |i|
	output.puts <<-css
.frames > div:nth-child(#{ i + 1 }) {
	transform: rotateY(#{ angleStep * i }deg) translateZ(380px);
    -webkit-transform: rotateY(#{ angleStep * i }deg) translateZ(380px);
    -moz-transform: rotateY(#{ angleStep * i }deg) translateZ(380px);
    -ie-transform: rotateY(#{ angleStep * i }deg) translateZ(380px);
    -o-transform: rotateY(#{ angleStep * i }deg) translateZ(380px);
    background-position: #{ 100 * i }px 0;
}
	css
end
