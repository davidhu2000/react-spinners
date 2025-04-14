filename = ARGV[0] + "Loader"

path = "./src/#{filename}.tsx"
file = File.open(path)

`rm __tests__/#{filename}-tests.tsx`
`rm __tests__/__snapshots__/#{filename}-tests.tsx.snap`

def camelize(string)
  string.split("-").map do |part, index|
    return part if index == 0
    part.capitalize
  end.join("")
end

content = file.read

puts "updating imports"
content.sub!("/** @jsxImportSource @emotion/react */", "")
content.sub!(/import .+ from "@emotion\/react";/, "")
content.sub!("\"./interfaces\"", "\"./helpers/props\"; import { createAnimation } from \"./helpers/animation\"")

puts "updating keyframes"
content.gsub!(/keyframes`/, "createAnimation\(\"#{filename}\",`")
content.sub!("`;", "`);")

default = content.match(/public static defaultProps = (?<type>.+)Defaults\((?<values>.+)\);/)

if default[:type] == "size"
  props = "size = #{default[:values]},"
elsif default[:type] == "heightWidthRadius"
  values = default[:values].split(/\s*,\s*/)
  props = "height = #{values[0]}, width = #{values[1]}, radius = #{values[2]},"
end

content.sub!(/class Loader extends React.PureComponent<Required<(.+)>> {/) do
  ["function #{filename}({",
   "  loading = true,",
   '  color = "#000000",',
   "  speedMultiplier = 1,",
   "  css = {},",
   "  #{props}",
   "  ...additionalprops",
   "}: #{$1})  {"].join("\n")
end

content.sub!(/public static defaultProps = .+;/, "")

content.gsub!(/const.+this.props;/, "")

content.sub!(/public style = \((.*)\): SerializedStyles => {\n.+$/) do
  "const style = \(#{$1}\): React.CSSProperties => {"
end

content.gsub!("return css`", "return {")
content.gsub!("`;", "};")

content.gsub!(/public (\w+) = \(\): SerializedStyles => {\n\s+return {/) do
  "const #{$1}: React.CSSProperties = {"
end
content.gsub!(/};\n\s+};/, "};")

content.gsub!(/(.+):\s*(.+);/) do
  "#{camelize($1)}: `#{$2}`,"
end

content.gsub!("css=", "style=")
content.gsub!("{this.", "{")

content.gsub!("public render()  {", "")
content.gsub!(/}\n\s+}/, "}")

content.gsub!("return loading ? (", "if (!loading) { return null; }\n\n return (")
content.gsub!(") : `null`,", ");")

content.gsub!("default Loader", "default #{filename}")

# puts content
File.write(path, content)
