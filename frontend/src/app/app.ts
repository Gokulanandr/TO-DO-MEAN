import { Component, signal, computed, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Todo {
  _id?: string;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.html',
})
export class AppComponent implements OnInit {
  title = 'Angular 22 TODO App';
  newTitle = signal('');
  todos = signal<Todo[]>([]);
  filter = signal<'all' | 'active' | 'completed'>('all');
  http = inject(HttpClient);

  filteredTodos = computed(() => {
    const f = this.filter();
    if (f === 'active') return this.todos().filter((t) => !t.completed);
    if (f === 'completed') return this.todos().filter((t) => t.completed);
    return this.todos();
  });

  constructor() {}

  loadTodos() {
    this.http
      .get<Todo[]>('http://localhost:3000/api/todos')
      .subscribe((data) => this.todos.set(data));
  }

  add() {
    const title = this.newTitle().trim();
    if (!title) return;

    const todo: Todo = { title, completed: false };

    this.http.post<Todo>('http://localhost:3000/api/todos', todo).subscribe((t) => {
      this.todos.update((list) => [...list, t]);
      this.newTitle.set('');
    });
  }

  toggle(todo: Todo) {
    this.http
      .patch<Todo>(`http://localhost:3000/api/todos/${todo._id}`, { completed: !todo.completed })
      .subscribe((updated) => {
        this.todos.update((list) => list.map((t) => (t._id === updated._id ? updated : t)));
      });
  }

  remove(todo: Todo) {
    this.http.delete(`http://localhost:3000/api/todos/${todo._id}`).subscribe(() => {
      this.todos.update((list) => list.filter((t) => t._id !== todo._id));
    });
  }

  ngOnInit() {
    console.log('21-10-2025');
    this.loadTodos();
  }
}
