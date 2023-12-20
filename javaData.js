export const javaData1 = `<ul>
<li>Arrays</li>
<ul>
    <li>Animal[] zoo = new Animal[4];</li>
    <li>zoo[0] = new Tiger();</li>
    <li>zoo[1] = new Giraffe();</li>
    <!-- ... -->
    <li>String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};</li>
    <li>System.out.println(cars.length); // Outputs 4</li>
    <li>int[][] myNumbers = {{1, 2, 3, 4}, {4, 5, 6}};</li>
    <li>int x = myNumbers[1][2];</li>
    <li>System.out.println(x); // Outputs 6</li>
    <li>Arrays.sort(cars);</li>
    <li>System.out.println(Arrays.toString(cars));</li>
    <ul>
        <li>[BMW, Ford, Mazda, Volvo]</li>
    </ul>
</ul>

<li>SORTING OBJECTS WITH MULTIPLE PARAMETERS:</li>
<ul>
    <li>NATURAL SORTING (Created within class)</li>
    <ul>
        <li>public class Person implements Comparable&lt;Person&gt; {</li>
        <li>@Override</li>
        <li>public int compareTo(Person o) {</li>
        <li>return Double.compare(this.weight, o2.weight);</li>
        <li>}</li>
        <li>// Use wrapper class</li>
        <li>Arrays.sort(listOfPeople); // Collections.sort(...);</li>
    </ul>

    <li>ALTERNATIVE SORTING (Created in separate class)</li>
    <ul>
        <li>public class SortOnName implements Comparator&lt;Person&gt; {</li>
        <li>@Override</li>
        <li>public int compare(Person o1, Person o2) {</li>
        <li>return o1.getName().compareTo(o2.getName());</li>
        <li>}</li>
        <li>Arrays.sort(listOfPeople, new SortOnName());</li>
    </ul>
</ul>

<li>ArrayList</li>
<ul>
    <li>import java.util.ArrayList;</li>
    <li>import java.util.Collections;</li>
    <li>public class Main {</li>
    <ul>
        <li>public static void main(String[] args) {</li>
        <li>ArrayList&lt;String&gt; cars = new ArrayList&lt;String&gt;();</li>
        <li>cars.add("Volvo");</li>
        <li>cars.add("BMW");</li>
        <li>cars.add("Ford");</li>
        <li>cars.add("Mazda");</li>
        <li>System.out.println(cars);</li>
        <li>}</li>
    </ul>
    <li>cars.get(0); // Access an item</li>
    <li>cars.set(0, "Opel"); // Change an item</li>
    <li>cars.remove(0); // Remove an item</li>
    <li>cars.clear(); // Clear full list</li>
    <li>cars.size(); // Find out number of elements</li>
    <li>Collections.sort(cars); // Sort cars</li>
    <ul>
        <li>for (String i : cars) {</li>
        <li>System.out.println(i);</li>
        <li>}</li>
    </ul>
    <li>Converting Array to ArrayList</li>
    <ul>
        <li>import java.util.Arrays;</li>
        <li>String[] names = {"John", "Jack", "Jill", "Jane"};</li>
        <li>List&lt;String&gt; list = Arrays.asList(names);</li>
    </ul>
</ul>

<li>Math</li>
<ul>
    <li>Math.random(); // Random number between 0.0 (exclusive) and 1.0 (exclusive)</li>
    <li>int randomNum = (int)(Math.random() * 101); // 0 to 100</li>
    <li>Math.sqrt(64); // Returns square root</li>
    <li>a >= b // Greater than or equal to</li>
    <li>a == b // Equal to</li>
    <li>a != b // Not equal to</li>
    <li>int nr++; // nr + 1</li>
    <li>int nr += 5; // nr + 5</li>
    <li>Randomize list</li>
    <ul>
        <li>import java.util.Collections;</li>
        <li>ArrayList&lt;String&gt; myList = new ArrayList&lt;String&gt;();</li>
        <li>myList.add("One");</li>
        <li>myList.add("Two");</li>
        <li>myList.add("Three");</li>
        <li>Collections.shuffle(myList); // [Two, One, Three]</li>
    </ul>
</ul>
</ul>`

export const javaData2 = `<ul>
<li>Break / Continue</li>
<ul>
    <li>for (int i = 0; i < 10; i++) {</li>
    <li>if (i == 4) {</li>
    <li>continue; // This skips the value of 4</li>
    <li>}</li>
    <li>if (i == 6) {</li>
    <li>break; // This jumps out of the for loop</li>
    <li>}</li>
    <li>}</li>
</ul>

<li>If...Else</li>
<ul>
    <li>int time = 22;</li>
    <li>if (time < 10) {</li>
    <li>System.out.println("Good morning!");</li>
    <li>} else if (time < 20) {</li>
    <li>System.out.println("Good day!");</li>
    <li>} else {</li>
    <li>System.out.println("Good evening!");</li>
    <li>}</li>
    <li>// Outputs "Good evening!"</li>
    <li>variable = (condition) ? expressionTrue : expressionFalse;</li>
    <li>int tine = 20;</li>
    <li>String result = (time < 18) ? "Good day!" : "Good evening!";</li>
    <li>System.out.println(result);</li>
    <li>// Outputs "Good evening!"</li>
</ul>

<li>Switch...Case</li>
<ul>
    <li>int day = 4;</li>
    <li>switch (day) {</li>
    <li>case 1:</li>
    <li>System.out.println("Monday");</li>
    <li>break;</li>
    <li>case 2:</li>
    <li>System.out.println("Tuesday");</li>
    <li>break;</li>
    <li>case 3:</li>
    <li>System.out.println("Wednesday");</li>
    <li>break;</li>
    <li>case 4:</li>
    <li>System.out.println("Thursday");</li>
    <li>break;</li>
    <li>case 5:</li>
    <li>System.out.println("Other day");</li>
    <li>break;</li>
    <li>}</li>
</ul>

<li>While loop</li>
<ul>
    <li>int i = 0;</li>
    <li>while (i < 5) {</li>
    <li>System.out.println(i);</li>
    <li>i++;</li>
    <li>}</li>
</ul>

<li>Do - While loop</li>
<ul>
    <li>int i = 0;</li>
    <li>do {</li>
    <li>System.out.println(i);</li>
    <li>i++;</li>
    <li>} while (i < 5);</li>
</ul>

<li>For loop</li>
<ul>
    <li>for (int i = 0; i < 5; i++) {</li>
    <li>System.out.println(i);</li>
    <li>}</li>
</ul>

<li>For - Each loop</li>
<ul>
    <li>for (type variableName : arrayName) {</li>
    <li>// code to be executed</li>
    <li>}</li>
    <li>String[] cars = {"Volvo", "BMW", "Ford"};</li>
    <li>for (String i : cars) {</li>
    <li>System.out.println(i);</li>
    <li>}</li>
</ul>

<li>Iterating</li>
<ul>
    <li>Iterator&lt;String&gt; iter = naamArrayList.iterator();</li>
    <li>while (iter.hasNext()) {</li>
    <li>System.out.println(iter.next().toString());</li>
    <li>}</li>
</ul>
</ul>`

export const javaData3 = `
<ul>
<li>String methods</li>
<ul>
    <li>String name1 = "cheatsheet";</li>
    <li>String name2 = "exam";</li>
    <li>name1.length(); // 10</li>
    <li>name2.concat(name1); // examcheatsheet</li>
    <li>name1.equals("cheatsheet"); // true</li>
    <li>name1.equalsIgnoreCase(name2); // false</li>
    <li>name1.indexOf('e'); // 2</li>
    <li>name1.charAt(0); // 'c'</li>
    <li>name1.toCharArray();</li>
    <li>char[] test = name1.toCharArray();</li>
    <li>test.toString();</li>
    <li>name1.replace(int 1, int 2, String);</li>
    <li>// Change chars from pos1 to pos2 by string</li>
</ul>

<li>Exceptions</li>
<ul>
    <li>try {</li>
    <li>// Block of code to try</li>
    <li>}</li>
    <li>catch (Exception e) {</li>
    <li>// Block of code to handle errors</li>
    <li>// Example: System.out.println(e.getMessage());</li>
    <li>}</li>
    <li>finally {</li>
    <li>try {</li>
    <li>// Block of code to try</li>
    <li>}</li>
    <li>catch (Exception o) {</li>
    <li>// Block of code to handle errors</li>
    <li>}</li>
</ul>

<li>To Create Specific Exception Class:</li>
<ul>
    <li>public class MijnException extends Exception {</li>
    <li>public MijnException() {</li>
    <li>super("DezeTekstAlsErrorBvb");</li>
    <li>}</li>
    <li>}</li>
</ul>

<li>Throw the Exception Up:</li>
<ul>
    <li>public boolean check(Persoon x) throws MijnException {</li>
    <li>if (x.getAchternaam().equals(y.getAchternaam())) {</li>
    <li>return true;</li>
    <li>} else {</li>
    <li>throw new MijnException();</li>
    <li>}</li>
    <li>}</li>
</ul>

<li>Type Casting</li>
<ul>
    <li>Widening Casting (automatically) - converting a smaller type to a larger type size</li>
    <li>byte -&gt; short -&gt; char -&gt; int -&gt; long -&gt; float -&gt; double</li>
    <li>int myInt = 9;</li>
    <li>double myDouble = myInt; // Automatic casting: int to double</li>
    <li>Narrowing Casting (manually) - converting a larger type to a smaller size type</li>
    <li>double -&gt; float -&gt; long -&gt; int -&gt; char -&gt; short -&gt; byte</li>
    <li>double myDouble = 9.78;</li>
    <li>int myInt = (int) myDouble; // Manual casting: double to int</li>
    <li>Upcasting / Downcasting</li>
    <li>// UPcasting:</li>
    <li>ParentClass name1 = new ChildClass(Parameters);</li>
    <li>Animal name1 = new Cat("Garfield");</li>
    <li>name1.makeSound(); // Outputs "miauw"</li>
    <li>// Can only access methods defined in Parent class and override-methods in Child class</li>
    <li>// DOWNcasting: only works on upcasted objects</li>
    <li>ChildClass name2 = (ChildClass) name1;</li>
    <li>Cat name2 = (Cat) name1;</li>
    <li>name2.makeSound(); // outputs "miauw"</li>
    <li>// Can access all methods defined in Child class AND all methods in Parent class</li>
</ul>
</ul>`

export const javaData4 = `<ul>
<li>Keywords</li>
<ul>
    <li>ABSTRACT:</li>
    <ul>
        <li>public abstract class ParentClass { ... }</li>
        <li>// Blocks creating object ParentClass</li>
        <li>// Required use of ChildClasses</li>
    </ul>

    <li>FINAL:</li>
    <ul>
        <li>// Attribute Once value is obtained, it can't be changed</li>
        <li>private final int a = 4;</li>
        <li>// Methods Cannot be overridden by subclasses</li>
        <li>public final void doSomething() { ... }</li>
        <li>// Class Cannot be used for Childclasses (no extends)</li>
        <li>public final class LockedClass { ... }</li>
    </ul>

    <li>INTERFACE:</li>
    <ul>
        <li>public interface dontForget { ... }</li>
        <li>void method1();</li>
        <li>// NO attribute</li>
        <li>// NO constructors</li>
        <li>// ONLY methods without a body</li>
        <li>// Uses implements (NOT extends)</li>
    </ul>

    <li>STATIC:</li>
    <ul>
        <li>private static long counter;</li>
        <li>// Fixed value for this class AND all subclasses</li>
    </ul>

    <li>SUPER:</li>
    <ul>
        <li>super() // Calls the default constructor</li>
        <li>super(Parameter...) // Calls the matching constructor</li>
        <li>! Must be the first line in the constructor !</li>
    </ul>
</ul>

<li>Stacks</li>
<ul>
    <li>import java.util.Stack;</li>
    <li>Stack&lt;String&gt; games = new Stack&lt;String&gt;();</li>
    <li>games.add("Call of Duty");</li>
    <li>games.add("Guitar hero");</li>
    <li>games.add("Dragonball Z");</li>
    <li>// [ Call of Duty, Guitar Hero, Dragonball Z ]</li>
    <li>games.pop(); // Takes (removes) upper from the list</li>
    <li>games.peek(); // Shows upper from the list</li>
    <li>games.contains(""); // Boolean</li>
    <li>games.get(0); // Use according to index</li>
</ul>

<li>Queue</li>
<ul>
    <li>import java.util.Queue</li>
    <li>Queue&lt;String&gt; bbqLine = new LinkedList&lt;String&gt;();</li>
    <li>bbqLine.add("Jackson");</li>
    <li>bbqLine.add("Jason");</li>
    <li>bbqLine.add("Johnson");</li>
    <li>// [ Jackson, Jason, Johnson ]</li>
    <li>bbqLine.poll(); // Takes (removes) first</li>
    <li>bbqLine.peek(); // Shows first</li>
</ul>

<li>Collections</li>
<ul>
    <li>List</li>
    <ul>
        <li>ArrayList // List in the order of added elements</li>
        <li>LinkedList // List of linked lists</li>
    </ul>

    <li>Set --------&gt; Collection of unique elements</li>
    <ul>
        <li>HashSet // Unsorted</li>
        <li>TreeSet // Sorted! Elements use Comparable interface</li>
    </ul>

    <li>Map --------&gt; Collection of unique Key, all-Value</li>
    <ul>
        <li>HashMap // Unsorted</li>
        <li>TreeMap // Sorted by key! Key class implemented with Comparable</li>
    </ul>
</ul>
</ul>`