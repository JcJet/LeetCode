class MyHashMap {
    private $data;

    public function __construct() {
        $this->data = [];
    }

    public function put($key, $value) {
        $this->data[$key] = $value;
    }

    public function get($key) {
        return isset($this->data[$key]) ? $this->data[$key] : -1;
    }

    public function remove($key) {
        unset($this->data[$key]);
    }
}