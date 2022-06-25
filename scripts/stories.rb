paths = Dir.glob("./src/*.tsx").filter do |path|
  !path.include?("stories") && !path.include?("test")
end

template = File.open("./scripts/stories.template").read

def get_args(content)
  args = []

  description = "Can be number or string. When number, unit is assumed as px. When string, a unit is expected to be passed in"

  ["size", "height", "width", "margin"].each do |arg|
    if content.include?("#{arg} =")
      args << "  #{arg}: { description: \"#{description}\", control: { type: \"number\" } },"
    end
  end

  args.join("\n")
end

paths.sort.each do |path|
  puts "creating story for #{path}"
  file = File.open(path)
  loader = path.match(/\w+Loader/).to_s

  arg_types = get_args(file.read)

  story_path = path.sub(".tsx", ".stories.tsx").sub("./src", "./stories")

  story = template.gsub("LOADER_NAME", loader).gsub("ARG_TYPES", arg_types)

  File.write(story_path, story)
end

puts "done creating stories"
