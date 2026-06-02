import { TouchableOpacity, View } from 'react-native';
import { Trash2 } from 'lucide-react-native';

type Props = {
  onRemove: () => void;
};

export default function Tags({ onRemove }: Props) {
  return (
    <View>
      <TouchableOpacity onPress={onRemove}>
        <Trash2 color="#f13d3d" />
      </TouchableOpacity>
    </View>
  );
}